import msg from './index'

describe('index file', () => {
  it('shouls show the correct msg', () => {
    expect(msg).toBe('Hello Robotleg and Phaser')
  })
})
