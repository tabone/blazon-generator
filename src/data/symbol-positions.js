export default {
  ABYSS: {
    id: 'ABYSS',
    label: 'in abyss {{symbol}} {{tincture}}'
  },
  BASE: {
    id: 'BASE',
    label: 'in base {{symbol}} {{tincture}}'
  },
  CHIEF: {
    id: 'CHIEF',
    label: 'in chief {{symbol}} {{tincture}}'
  },
  EACH_QUARTER: {
    id: 'EACH_QUARTER',
    label: 'in each quarter {{symbol}} {{tincture}}'
  },
  FIRST_AND_FOURTH_QUARTER: {
    id: 'FIRST_AND_FOURTH_QUARTER',
    label: 'in first and fourth {{symbol}} {{tincture}}'
  },
  FIRST_AND_SECOND_QUARTER: {
    id: 'FIRST_AND_SECOND_QUARTER',
    label: 'in first and second {{symbol}} {{tincture}}'
  },
  SECOND_AND_THIRD_QUARTER: {
    id: 'SECOND_AND_THIRD_QUARTER',
    label: 'in second and third quarter {{symbol}} {{tincture}}'
  },
  ON_A_CHIEF: {
    id: 'ON_A_CHIEF',
    label: 'on a chief {{tincture}} {{symbol}} {{tincture}}',
    amount: [2, 3, 4, 5],
    compatible: [
      'ABYSS',
      'BASE',
      'EACH_QUARTER',
      'FIRST_AND_FOURTH_QUARTER',
      'SECOND_AND_THIRD_QUARTER'
    ]
  },
  ON_A_BASE: {
    id: 'ON_A_BASE',
    label: 'on a base {{tincture}} {{symbol}} {{tincture}}',
    amount: [1, 2, 3],
    compatible: [
      'ABYSS',
      'CHIEF',
      'EACH_QUARTER',
      'FIRST_AND_FOURTH_QUARTER',
      'SECOND_AND_THIRD_QUARTER'
    ]
  },
  ON_A_PLAIN_CROSS: {
    id: 'ON_A_PLAIN_CROSS',
    label: 'on a plain cross {{tincture}} {{symbol}} {{tincture}}',
    amount: [1, 2, 3, 4, 5],
    compatible: [
      'EACH_QUARTER',
      'FIRST_AND_FOURTH_QUARTER',
      'SECOND_AND_THIRD_QUARTER'
    ]
  },
  ON_A_FESSE: {
    id: 'ON_A_FESSE',
    label: 'on a fesse {{tincture}} {{symbol}} {{tincture}}',
    amount: [1, 2, 3, 4, 5],
    compatible: [
      'CHIEF',
      'BASE',
      'EACH_QUARTER',
      'FIRST_AND_FOURTH_QUARTER',
      'SECOND_AND_THIRD_QUARTER'
    ]
  },
  ON_A_PALE: {
    id: 'ON_A_PALE',
    label: 'on a pale {{tincture}} {{symbol}} {{tincture}}',
    amount: [1, 2, 3, 4, 5],
    compatible: [
      'EACH_QUARTER',
      'FIRST_AND_FOURTH_QUARTER',
      'SECOND_AND_THIRD_QUARTER'
    ]
  },
  ON_A_BEND_SINISTER: {
    id: 'ON_A_BEND_SINISTER',
    label: 'on a bend sinister {{tincture}} {{symbol}} {{tincture}}',
    amount: [1, 2, 3, 4, 5],
    compatible: ['FIRST_AND_FOURTH_QUARTER']
  },
  ON_A_BEND: {
    id: 'ON_A_BEND',
    label: 'on a bend {{tincture}} {{symbol}} {{tincture}}',
    amount: [1, 2, 3, 4, 5],
    compatible: ['SECOND_AND_THIRD_QUARTER']
  },
  ON_A_CROSS: {
    id: 'ON_A_CROSS',
    label: 'on a cross {{tincture}} {{symbol}} {{tincture}}',
    amount: [1, 5],
    compatible: [
      'EACH_QUARTER',
      'FIRST_AND_FOURTH_QUARTER',
      'SECOND_AND_THIRD_QUARTER'
    ]
  },
  ON_A_SALTIRE: {
    id: 'ON_A_SALTIRE',
    label: 'on a saltire {{tincture}} {{symbol}} {{tincture}}',
    amount: [1, 4, 5],
    compatible: ['CHIEF', 'BASE']
  },
  ON_A_CHEVRON: {
    id: 'ON_A_CHEVRON',
    label: 'on a chevron {{tincture}} {{symbol}} {{tincture}}',
    amount: [1, 2, 3, 4, 5],
    compatible: ['CHIEF', 'BASE', 'FIRST_AND_SECOND_QUARTER']
  }
}
