import { TrainingResponse } from 'src/services/trainingApi';

export type SelectedCellInfo = {
    cellHTMLElement: HTMLTableCellElement | HTMLDivElement;
    cellContent: TrainingResponse[];
};
