export const modifierCSS = (value, prefix) => (value ? `as--${prefix ? `${prefix}-` : ''}${value}` : '');

/**
 * Generate CSS modifier classes
 *
 * @param {Object} p Object of params
 * @param {String} p.value e.g. 'center'
 * @param {String} [p.prefix] e.g. 'align'
 * @param {Boolean} [p.isResponsive]
 * @param {Array.<String>} [p.allowed] Allowed values. e.g. ['left', 'center', 'right']
 */
export const getModifierClasses = ({
  value,
  prefix = '',
  isResponsive = false,
  allowed = [],
}) => {
  if (!value || value === true) {
    return '';
  }

  const responsiveSuffixes = ['', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  const allowedExtended = !isResponsive
    ? allowed
    : allowed.reduce((acc, x) => [
      ...acc,
      ...responsiveSuffixes.map((suffix) => (suffix ? `${x}@${suffix}` : x)),
    ], []);

  return value.toString().split(' ')
    .filter((x) => (allowedExtended.length ? allowedExtended.includes(x) : true))
    .map((x) => modifierCSS(x, prefix));
};
