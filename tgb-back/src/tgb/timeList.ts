const Times = {
  '-': '-',
  '0.5hour': '0.5h',
  '1hour': '1h',
  '2hour': '2h',
  '3hour': '3h',
  '4hour': '4h',
  '5hour': '5h',
  '6hour': '6h',
  '7hour': '7h',
  '1day': '1d',
  '1.5day': '1.5d',
  '2day': '2d',
  '2.5day': '2.5d',
  '3day': '3d',
  '3.5day': '3.5d',
  '4day': '4d',
  '4.5day': '4.5d',
  '5day': '5d',
  '5.5day': '5.5d',
  '6day': '6d',
  '6.5day': '6.5d',
  '7day': '7d'
} as const;
type keys = keyof typeof Times;
export type SelectTime = typeof Times[keys];

export class SelectTimeValue {
  static defaultTime(): SelectTime {
    return '-';
  }

  static getTimes(): Array<SelectTime> {
    return Object.values(Times);
  }

  static contains(time: any): time is SelectTime {
    return Object.values(Times).includes(time);
  }
}
