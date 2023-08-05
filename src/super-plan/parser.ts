import { readTable, defaultOptions, Table } from "@tgrosinger/md-advanced-tables";
import { PlanData } from "./types";

export function parsePlan(content: string[]) {
    try {
        const table = readTable(content, defaultOptions);
        const records = transformTable(table);
        const result = PlanData.safeParse(records);
        return result.success ? result.data : null;
    } catch {
        return null;
    }
}

function transformTable(table: Table) {
    const headers = table
        .getRows()[0]
        .getCells()
        .map(cell => cell.content);

    const records: Record<string, string>[] = [];

    const rows = table.getRows();
    for (let rowIdx = 2; rowIdx < rows.length; rowIdx++) {
        const row = rows[rowIdx];
        const record: Record<string, string> = {};
        for (let colIdx = 0; colIdx < headers.length; colIdx++) {
            const header = headers[colIdx];
            const cell = row.getCells()[colIdx];
            record[header] = cell.content;
        }
        records.push(record);
    }

    return records;
}
