const routes = [
    {
        url: '/courses',
        proxy: {
            target: process.env.COURSE_API_URL + 'api/courses',
            changeOrigin: true,
            pathRewrite: {
                '^/courses': '',
            },
        },
    },
    {
        url: '/students',
        proxy: {
            target: process.env.STUDENT_API_URL + 'api/students',
            changeOrigin: true,
            pathRewrite: {
                '^/students': '',
            },
        },
    },
]

exports.routes = routes;