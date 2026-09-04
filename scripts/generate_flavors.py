#!/usr/bin/env python3
import os
import csv
import re
import json
import argparse

# Category configurations
CATEGORIES = {
    "matcha": {
        "id": "matcha",
        "categoryButtonText": "หมวด มัทฉะพิธีการ",
        "backgroundColorClass": "bg-matcha-bg",
        "imageName": "matcha",
        "name": "มัทฉะพิธีการ (เกรดพิธีชง/มรดกญี่ปุ่น)",
    },
    "fruits": {
        "id": "fruits",
        "categoryButtonText": "หมวด ผลไม้ตามฤดูกาล",
        "backgroundColorClass": "bg-fruits-bg",
        "imageName": "fruits",
        "name": "ผลไม้ตามฤดูกาล",
    },
    "coffee": {
        "id": "coffee",
        "categoryButtonText": "หมวด กาแฟนม Specialty",
        "backgroundColorClass": "bg-coffee-bg",
        "imageName": "coffee",
        "name": "กาแฟนม Specialty (Single Origin and Award-Winning)",
    },
    "eastern-tea": {
        "id": "eastern-tea",
        "categoryButtonText": "หมวด ชานมตะวันออก",
        "backgroundColorClass": "bg-eastern-tea-bg",
        "imageName": "eastern-tea",
        "name": "ชานมตะวันออก (เกรดประกวดแข่งขัน)",
    },
    "western-tea": {
        "id": "western-tea",
        "categoryButtonText": "หมวด ชานมตะวันตก",
        "backgroundColorClass": "bg-western-tea-bg",
        "textColorClass": "text-western-tea-text",
        "imageName": "western-tea",
        "name": "ชานมตะวันตก",
    },
    "classic": {
        "id": "classic",
        "categoryButtonText": "หมวด รสคลาสสิก",
        "backgroundColorClass": "bg-classic-bg",
        "textColorClass": "text-classic-text",
        "imageName": "classic",
        "name": "รสชาติคลาสสิกของ The Purist",
    },
    "chocolate": {
        "id": "chocolate",
        "categoryButtonText": "หมวด ช็อกโกแลต",
        "backgroundColorClass": "bg-chocolate-bg",
        "imageName": "chocolate",
        "name": "ช็อกโกแลตกานาช และช็อกโกแลตซอร์เบ (เกรดประกวดแข่งขัน)",
    },
    "special": {
        "id": "special",
        "categoryButtonText": "หมวด รสพิเศษ",
        "backgroundColorClass": "bg-special-bg",
        "imageName": "special",
        "name": "รสชาติพิเศษอื่นๆ",
    }
}

# The ordered list of categories to export in the final array
CATEGORY_ORDER = [
    "matcha",
    "fruits",
    "coffee",
    "eastern-tea",
    "western-tea",
    "classic",
    "chocolate",
    "special"
]

def get_var_name(cat_id):
    if cat_id == "eastern-tea":
        return "easternTea"
    if cat_id == "western-tea":
        return "westernTea"
    return cat_id

def normalize_name(name):
    if not name:
        return ""
    n = name.lower()
    n = n.strip(" .")
    n = re.sub(r'\s+', ' ', n)
    return n

def to_valid_js_identifier(s):
    # Remove file extension if present
    s = os.path.splitext(s)[0]
    # Replace non-alphanumeric with spaces, then camelCase
    s = re.sub(r'[^a-zA-Z0-9]+', ' ', s).strip()
    parts = s.split()
    if not parts:
        return "flavors"
    return parts[0].lower() + "".join(w.capitalize() for w in parts[1:])

def extract_soldout_statuses(filepath):
    if not os.path.exists(filepath):
        return {}
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Match item blocks: text between { and } that doesn't contain further nested braces.
    item_blocks = re.findall(r'\{[^{}]*?\}', content, re.DOTALL)
    soldout_map = {}
    for block in item_blocks:
        name_match = re.search(r'name:\s*["\'`](.*?)["\'`]', block)
        if name_match:
            name = name_match.group(1).strip()
            soldout_match = re.search(r'isSoldOut:\s*(SOLDOUT_TYPE\.\w+)', block)
            if soldout_match:
                soldout_map[normalize_name(name)] = soldout_match.group(1)
    return soldout_map

def find_csv_file(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".csv"):
            return os.path.join(directory, filename)
    return None

def main():
    parser = argparse.ArgumentParser(description="Generate Flavors.ts from a menu CSV file.")
    parser.add_argument(
        "directory", 
        nargs="?", 
        help="Optional path to event directory (e.g. src/MenuFlavors/Somkid-07-26). If provided, the script automatically resolves the CSV and output file path."
    )
    parser.add_argument("--csv", help="Explicit path to the input CSV file.")
    parser.add_argument("--output", help="Explicit path to the output Flavors.ts file.")
    parser.add_argument("--export-name", help="Explicit name for the exported array of Flavor objects.")
    
    args = parser.parse_args()
    
    csv_path = None
    output_path = None
    export_name = None
    
    if args.directory:
        if not os.path.isdir(args.directory):
            print(f"Error: Target directory '{args.directory}' does not exist or is not a directory.")
            return
        
        # 1. Resolve CSV path
        found_csv = find_csv_file(args.directory)
        if not found_csv:
            print(f"Error: No CSV file found in '{args.directory}'.")
            return
        csv_path = found_csv
        
        # 2. Resolve Output path
        output_path = os.path.join(args.directory, "Flavors.ts")
        
        # 3. Resolve Export name from CSV filename
        csv_filename = os.path.basename(csv_path)
        export_name = to_valid_js_identifier(csv_filename)
        
    # Apply explicit overrides if provided
    if args.csv:
        csv_path = args.csv
    if args.output:
        output_path = args.output
    if args.export_name:
        export_name = args.export_name
        
    if not csv_path or not output_path:
        print("Error: You must specify a target directory, or provide both --csv and --output options.")
        parser.print_help()
        return
        
    if not export_name:
        # Default export name if not inferred or provided
        export_name = to_valid_js_identifier(os.path.basename(csv_path))
        
    print(f"Generating flavors with configuration:")
    print(f"  CSV path:    {csv_path}")
    print(f"  Output path: {output_path}")
    print(f"  Export name: {export_name}")
    
    # Locate workspace root to calculate relative path to types
    script_dir = os.path.dirname(os.path.abspath(__file__))
    workspace_root = os.path.dirname(script_dir)
    types_abs_path = os.path.abspath(os.path.join(workspace_root, "src/MenuFlavors/types"))
    
    out_dir_abs = os.path.dirname(os.path.abspath(output_path))
    types_rel_path = os.path.relpath(types_abs_path, out_dir_abs)
    types_import_path = types_rel_path.replace(os.sep, "/")
    if not types_import_path.startswith("."):
        types_import_path = "./" + types_import_path
        
    print(f"  Types import path: {types_import_path}")

    # 1. Extract sold out status from existing Flavors.ts if present
    soldout_map = extract_soldout_statuses(output_path)
    if soldout_map:
        print(f"Extracted {len(soldout_map)} items with soldout status from existing Flavors.ts:")
        for name, status in soldout_map.items():
            print(f"  - {name}: {status}")
    else:
        print("No items with soldout status found in existing Flavors.ts")
    
    # 2. Parse CSV file
    items_by_category = {cat_id: [] for cat_id in CATEGORIES}
    
    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)
        header = next(reader) # Skip header
        
        for idx, row in enumerate(reader):
            if not row or len(row) < 9:
                continue
            
            is_new_flavor = row[0].strip().lower() == "true"
            in_menu = row[1].strip()
            name = row[2].strip()
            category_id = row[4].strip().lower() # Column index 4
            description = row[5].strip()
            tasting_notes = row[6].strip()
            
            # Parse price
            price_str = row[7].strip()
            try:
                price = int(price_str)
            except ValueError:
                price = 0
                
            instagram_url = row[8].strip()
            
            if not name:
                continue
                
            if category_id not in CATEGORIES:
                print(f"Warning: Row {idx+2} has unknown category_id '{category_id}'. Skipping.")
                continue
                
            item = {
                "isNewFlavor": is_new_flavor,
                "name": name,
                "description": description,
                "tastingNotes": tasting_notes,
                "price": price,
                "instagramUrl": instagram_url
            }
            
            items_by_category[category_id].append(item)

    # 3. Generate TypeScript Code
    ts_code = []
    ts_code.append("// eslint-disable-next-line @typescript-eslint/no-unused-vars")
    ts_code.append(f"import {{ Flavor, SOLDOUT_TYPE }} from \"{types_import_path}\";")
    ts_code.append("")
    ts_code.append("// Use this web to do conversion from csv and put it in parsedFlavours:")
    ts_code.append("// https://csvjson.com/csv2json")
    ts_code.append("// eslint-disable-next-line @typescript-eslint/no-unused-vars")
    ts_code.append("const parsedFlavours = [];")
    ts_code.append("")
    
    generated_categories = []
    
    for cat_id in CATEGORY_ORDER:
        items = items_by_category.get(cat_id, [])
        if not items:
            continue
            
        var_name = get_var_name(cat_id)
        generated_categories.append(var_name)
        
        cat_config = CATEGORIES[cat_id]
        
        ts_code.append(f"const {var_name}: Flavor = {{")
        ts_code.append(f"  id: \"{cat_config['id']}\",")
        ts_code.append(f"  categoryButtonText: \"{cat_config['categoryButtonText']}\",")
        ts_code.append(f"  backgroundColorClass: \"{cat_config['backgroundColorClass']}\",")
        if "textColorClass" in cat_config:
            ts_code.append(f"  textColorClass: \"{cat_config['textColorClass']}\",")
        ts_code.append(f"  imageName: \"{cat_config['imageName']}\",")
        ts_code.append(f"  name: \"{cat_config['name']}\",")
        ts_code.append("  items: [")
        
        for item in items:
            ts_code.append("    {")
            ts_code.append(f"      isNewFlavor: {str(item['isNewFlavor']).lower()},")
            ts_code.append(f"      name: {json.dumps(item['name'], ensure_ascii=False)},")
            ts_code.append("      description:")
            ts_code.append(f"        {json.dumps(item['description'], ensure_ascii=False)},")
            ts_code.append(f"      tastingNotes: {json.dumps(item['tastingNotes'], ensure_ascii=False)},")
            
            # Check for preserved sold out status
            norm_name = normalize_name(item['name'])
            soldout_status = soldout_map.get(norm_name)
            if soldout_status:
                ts_code.append(f"      isSoldOut: {soldout_status},")
                print(f"Preserving status for item '{item['name']}': {soldout_status}")
                
            ts_code.append(f"      price: {item['price']},")
            ts_code.append(f"      instagramUrl: {json.dumps(item['instagramUrl'], ensure_ascii=False)},")
            ts_code.append("    },")
            
        ts_code.append("  ],")
        ts_code.append("};")
        ts_code.append("")
        
    # Generate the export array
    ts_code.append("// eslint-disable-next-line @typescript-eslint/no-unused-vars")
    ts_code.append("const template: Flavor = {")
    ts_code.append("  id: \"\",")
    ts_code.append("  categoryButtonText: \"\",")
    ts_code.append("  backgroundColorClass: \"\",")
    ts_code.append("  imageName: \"\",")
    ts_code.append("  name: \"\",")
    ts_code.append("  items: [],")
    ts_code.append("};")
    ts_code.append("")
    ts_code.append(f"export const {export_name}: Flavor[] = [")
    for var_name in generated_categories:
        ts_code.append(f"  {var_name},")
    ts_code.append("];")
    ts_code.append("")
    
    # Ensure directory exists
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    
    # 4. Write to Flavors.ts
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(ts_code))
        
    print(f"Successfully generated {output_path}")

if __name__ == "__main__":
    main()
