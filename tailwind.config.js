// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwindcss = require('tailwindcss');

module.exports = {
    theme: {
        extend: {
            colors: {
                blue: {
                    500: '#ca2edb'
                }
            }
        }
    },
    variants: {},
    plugins: [tailwindcss]
};
