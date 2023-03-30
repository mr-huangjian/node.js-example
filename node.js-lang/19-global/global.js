console.log(global)

global.name = 'hj'
console.log(name) // hj
console.log(Object.keys(global))

/**
    [
        'global',          'queueMicrotask',
        'clearImmediate',  'setImmediate',
        'structuredClone', 'clearInterval',
        'clearTimeout',    'setInterval',
        'setTimeout',      'atob',
        'btoa',            'performance',
        'fetch',           'crypto'
    ]
 */
