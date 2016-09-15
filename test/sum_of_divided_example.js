const { createTestCase } = require('./helpers')

function sumOfDividedTests(sumOfDivided) {
  describe('sumOfDivided', () => {
    const test = createTestCase(orig => sumOfDivided(orig))

    test([], [])
    test([12, 15], [[2, 12], [3, 27], [5, 15]])
    test([15, 21, 24, 30, 45], [[2, 54], [3, 135], [5, 90], [7, 21]])
    test([15, 30, -45], [[2, 30], [3, 0], [5, 0]])
    test([15, 21, 24, 30, -45], [[2, 54], [3, 45], [5, 0], [7, 21]])
    test(
      [107, 158, 204, 100, 118, 123, 126, 110, 116, 100],
      [[2, 1032], [3, 453], [5, 310], [7, 126], [11, 110], [17, 204], [29, 116], [41, 123], [59, 118], [79, 158], [107, 107]]
    )
    test(
      [-29804, -4209, -28265, -72769, -31744],
      [[2, -61548], [3, -4209], [5, -28265], [23, -4209], [31, -31744], [53, -72769], [61, -4209], [1373, -72769], [5653, -28265], [7451, -29804]]
    )
    test(
      [1070, 1580, 2040, 1000, 1180, 1230, 1260, 1100, 1160, 1000],
      [[2, 12620], [3, 4530], [5, 12620], [7, 1260], [11, 1100], [17, 2040], [29, 1160], [41, 1230], [59, 1180], [79, 1580], [107, 1070]]
    )
    test([17, 34, 51, 68, 102], [[2, 204], [3, 153], [17, 272]])
    test([17, -17, 51, -51], [[3, 0], [17, 0]])
    test([173471], [[41, 173471], [4231, 173471]])
  })
}

module.exports = sumOfDividedTests
