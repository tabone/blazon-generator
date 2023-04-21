import randomGenerator from 'random-seed'

import symbols from './data/symbols'
import tinctures from './data/tinctures'
import divisions from './data/divisions'
import ordinaries from './data/ordinaries'
import symbolPositions from './data/symbol-positions'

function pickone(rand, list) {
  return list[rand.range(list.length)]
}

function translateTincturePlaceholders(random, blazon) {
  return blazon.replace(/{{tincture}}/g, () => {
    return tinctures[pickone(random, Object.keys(tinctures))].label
  })
}

function translateSymbolPositionsPlaceholders(random, positionIDs) {
  return positionIDs.map((positionID) => {
    const position = symbolPositions[positionID]

    const symbolAmount =
      position.amount == null ? 1 : pickone(random, position.amount)

    return position.label.replace(/{{symbol}}/g, () => {
      const label =
        symbols[pickone(random, Object.keys(symbols))][
          symbolAmount === 1 ? 'singular' : 'plural'
        ]

      return `${symbolAmount} ${label}`
    })
  })
}

export default function generate(props = {}) {
  const { seed = String(Math.random()) } = props

  const random = new randomGenerator(seed)

  const blazon = [divisions, ordinaries].map((aspects) => {
    return aspects[pickone(random, Object.keys(aspects))].label
  })

  const positionIDs = [pickone(random, Object.keys(symbolPositions))]
  const compatiblePositionIDs = symbolPositions[positionIDs[0]].compatible

  if (compatiblePositionIDs != null) {
    positionIDs.push(pickone(random, compatiblePositionIDs))
  }

  return translateTincturePlaceholders(
    random,
    [
      ...blazon,
      ...translateSymbolPositionsPlaceholders(random, positionIDs)
    ].join(', ')
  )
}
