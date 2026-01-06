import { Dispatch, SetStateAction } from "react";


export type ColumnType = 'backlog' | 'todo' | 'doing' | 'done';

export type ColumnProps = {
  title: string;
  headingColor: string;
  cards: CardType[];
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

export type CardType = {
  title: string;
  id: string;
  column: ColumnType;
};

export type CardProps = CardType & {
  handleDragStart: Function;
};

export type DropIndicatorProps = {
  beforeId: string;
  column: string;
}

export type AddCardProps = {
  column: ColumnType;
  setCards: Dispatch<SetStateAction<CardType[]>>;
}