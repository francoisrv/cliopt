import clipop from './clipop'

const tests = [
  {
    args: ['foo', 'bar'],
    expect: {}
  },
  {
    args: ['-foo', 'bar'],
    expect: {}
  },
  {
    args: ['--foo', 'bar'],
    expect: { foo: 'bar' }
  },
  {
    args: ['--foo.foo', 'bar', '--bar[0].foo', 'barz'],
    expect: {
      foo: { foo: 'bar' },
      bar: [{ foo: 'barz' }]
    }
  },
  {
    args: ['--foo'],
    expect: { foo: true }
  },
  {
    args: ['--foo', '--bar'],
    expect: { foo: true, bar: true }
  },
  {
    args: ['--foo', '---true'],
    expect: { foo: true }
  },
  {
    args: ['--foo', '---false'],
    expect: { foo: false }
  },
  {
    args: ['--foo', '---null'],
    expect: { foo: null }
  },
  {
    args: ['--foo', '---22'],
    expect: { foo: 22 }
  },
  {
    args: ['--foo', '----22'],
    expect: { foo: -22 }
  },
  {
    args: ['--foo', '----22.5'],
    expect: { foo: -22.5 }
  },
  {
    args: ['--foo', '22'],
    expect: { foo: '22' }
  },
  {
    args: ['--foo', 'true'],
    expect: { foo: 'true' }
  },
  {
    args: ['--foo', 'false'],
    expect: { foo: 'false' }
  },
  {
    args: ['--foo', 'null'],
    expect: { foo: 'null' }
  },
]

for (const t of tests) {
  test(t.args.join(' '), () => {
    expect(clipop(...t.args)).toEqual(t.expect)
  })
}
