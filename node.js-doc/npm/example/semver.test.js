// import semver
const semver = require('semver')

/**
    [
    'parse',              'valid',               'clean',
    'inc',                'diff',                'major',
    'minor',              'patch',               'prerelease',
    'compare',            'rcompare',            'compareLoose',
    'compareBuild',       'sort',                'rsort',
    'gt',                 'lt',                  'eq',
    'neq',                'gte',                 'lte',
    'cmp',                'coerce',              'Comparator',
    'Range',              'satisfies',           'toComparators',
    'maxSatisfying',      'minSatisfying',       'minVersion',
    'validRange',         'outside',             'gtr',
    'ltr',                'intersects',          'simplifyRange',
    'subset',             'SemVer',              're',
    'src',                'tokens',              'SEMVER_SPEC_VERSION',
    'compareIdentifiers', 'rcompareIdentifiers'
    ]
 */
// console.log(Object.keys(semver))

/**
 * semver.satisfies(要检测的版本，版本语义表达式)
 */
console.log(semver.satisfies('1.2.3', '1.x || >=2.5.0 || 5.0.0 - 7.2.3')) // true

