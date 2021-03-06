import toString from '../lang/toString';

/**
 * Escape RegExp string chars.
 */
function escapeRegExp(str) {
    return toString(str).replace(/\W/g, '\\$&');
}

export default escapeRegExp;
