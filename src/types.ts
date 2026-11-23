export type ColumnId = "todo" | "doing" | "done";

export interface Card {
    id: string;
    title: string;
    column: ColumnId;
}

export interface BoardState {
    cards: Card[];
}

export type BoardAction = | {
    type: "ADD_CARD";
    title: string;
} | {
    type: "MOVE_CARD";
    id: string;
    to: ColumnId
} |  {
    type: "EDIT_CARD";
    id: string;
    title: string
} | {
    type: "REMOVE_CARD";
    id: string
}