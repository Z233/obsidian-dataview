export const SUPER_PLAN_CODE_BLOCK_LANG = "super-plan";

export enum Columns {
    ID = 0,
    F = 1,
    Start = 2,
    Activity = 3,
    Length = 4,
    R = 5,
    ActLen = 6,
}

export enum ColumnKeys {
    ID = "id",
    F = "f",
    Start = "start",
    Activity = "activity",
    Length = "length",
    R = "r",
    ActLen = "actLen",
}

export const ColumnKeysMap = {
    // key to index
    [Columns.ID]: ColumnKeys.ID,
    [Columns.F]: ColumnKeys.F,
    [Columns.Start]: ColumnKeys.Start,
    [Columns.Activity]: ColumnKeys.Activity,
    [Columns.Length]: ColumnKeys.Length,
    [Columns.R]: ColumnKeys.R,
    [Columns.ActLen]: ColumnKeys.ActLen,
    // index to key
    [ColumnKeys.ID]: Columns.ID,
    [ColumnKeys.F]: Columns.F,
    [ColumnKeys.Start]: Columns.Start,
    [ColumnKeys.Activity]: Columns.Activity,
    [ColumnKeys.Length]: Columns.Length,
    [ColumnKeys.R]: Columns.R,
    [ColumnKeys.ActLen]: Columns.ActLen,
} as const;
