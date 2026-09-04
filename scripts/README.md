# Flavor Code Generator Script

This script automatically generates the TypeScript code file (`Flavors.ts`) for any event from its raw menu `.csv` data. It ensures type safety and adheres to the structures defined in `src/MenuFlavors/types.ts`.

Additionally, the script **preserves any manually adjusted `isSoldOut` statuses** of existing items so they are not lost upon regeneration.

## Location

- Script: `scripts/generate_flavors.py`

---

## How to Use

### 1. Basic Usage (Recommended)

When you place a `.csv` file in your event directory (e.g. `src/MenuFlavors/Somkid-07-26`), you can run the script by passing the directory path:

```bash
python3 scripts/generate_flavors.py src/MenuFlavors/Somkid-07-26
```

**What the script does automatically:**
- Scans the directory for the first `.csv` file (e.g. `somkid0726.csv`).
- Sets the output file to `src/MenuFlavors/Somkid-07-26/Flavors.ts`.
- Extracts the existing `isSoldOut` status of items in the current `Flavors.ts` (if it exists) to carry them over.
- Derives the JavaScript/TypeScript export variable name from the CSV filename (e.g. `somkid0726.csv` -> `somkid0726`).
- Resolves the correct relative path to `types.ts` automatically (e.g. `import { Flavor, SOLDOUT_TYPE } from "../types"`).

---

### 2. Advanced Usage (Explicit Overrides)

If you want to run the script with custom paths or options, use the command-line flags:

```bash
python3 scripts/generate_flavors.py --csv path/to/menu.csv --output path/to/Flavors.ts --export-name myExportArray
```

#### Available Arguments:
- `directory` (positional): The target event folder.
- `--csv`: Explicit path to the input CSV file.
- `--output`: Explicit path to the target TypeScript file.
- `--export-name`: Explicit name for the exported array of Flavor objects (e.g. `somkid0726`).

---

## CSV File Schema

The input CSV file must contain the following columns (headers are case-sensitive):
1. `isNewFlavor`: `true` / `false` (whether the item is a new flavor).
2. `In menu`: (Optional flag/checkbox).
3. `name`: Name of the item.
4. `category`: User-friendly category name (e.g. `Seasonal Fruit`).
5. `category` (5th column): Unique category ID matching the folder styling and layout keys (e.g. `fruits`, `matcha`, `coffee`, `classic`, `eastern-tea`, `western-tea`, `chocolate`, `special`).
6. `description`: Detailed description of the flavor.
7. `tastingNotes`: Tasting notes, if any.
8. `price`: Item price (number).
9. `instagramUrl`: Link to Instagram post for the flavor.
