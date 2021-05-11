class Transcriptor {
  toRna(dnaSeq: string): string {
    const dnaSeqArr: string[] = dnaSeq.split('')
    let rnaSeq: string = ""
    dnaSeqArr.forEach(element => {
      if (element === 'C') {
        rnaSeq += 'G'
      }
      else if (element === 'G') {
        rnaSeq += 'C'
      }
      else if (element === 'A') {
        rnaSeq += 'U'
      }
      else if (element === 'T') {
        rnaSeq += 'A'
      }
      else {
        throw new Error('Invalid input DNA.')
      }
    });

    return rnaSeq
  }
}

export default Transcriptor
