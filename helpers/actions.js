module.exports = {
  build: (role, cmd, ...params) => ({
    role,
    cmd,
    ...params
  })
}
