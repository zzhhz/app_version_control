/**
 * 校验对象是否是json对象。
 * @param data json对象
 * @returns {*} 类型。
 */
function getTypeOf(data) {
    const toString = Object.prototype.toString
    const map = {
        '[object array]': 'array',
        '[object object]': 'object',
        '[object string]': 'string',
        '[object function]': 'function',
        '[object number]': 'number',
        '[object boolean]': 'boolean',
        '[object undefined]': 'undefined',
        '[object null]': 'null'
    }
    return map[toString.call(data).toLowerCase()]
}
export { getTypeOf }