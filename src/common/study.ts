export class StudyDataEntity {
  dataId: number;

  dataType: number | null;

  dataBrand: string | null;

  dataGatherTime: Date | null;

  dataPublishTime: Date | null;

  dataChannel: string | null;

  dataTitle: string | null;

  dataKeyword: string | null;

  dataNature: number | null;
}

export interface StudySearchType {
  dataType: number | null;

  dataBrand: string | null;

  dataGatherTime: string[];

  dataPublishTime: Date | null;

  dataChannel: string | null;

  dataTitle: string | null;

  dataKeyword: string | null;

  dataNature: number | null;
}

export const BranchEnum = {
  1: '冰箱',
  2: '洗衣机',
  3: '空调',
};
