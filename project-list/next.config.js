module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login.html',
        permanent: true,
      },
    ];
  },
};
