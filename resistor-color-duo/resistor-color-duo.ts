export class ResistorColor {
  private colorsList: string[] = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey'
  ]
  private colors: string[]

  constructor(colors: string[]) {
    this.colors = colors
    if (this.colors.length < 2) {
      throw new Error('At least two colors need to be present')
    }
  }
  value = (): number => {
    let col1num = 0
    let col2num = 0

    this.colorsList.forEach((element: string, index: number): void => {
      if (element === this.colors[0]) {
        col1num = index
      }

      if (element === this.colors[1]) {
        col2num = index
      }
    });

    const result: number = col1num * 10 + col2num
    return result

  }
}
