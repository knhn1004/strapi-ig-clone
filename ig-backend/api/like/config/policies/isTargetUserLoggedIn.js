// midleware
module.exports = async (ctx, next) => {
  const targetUser = String(ctx.request.query.user)
  const loggedInUser = String(ctx.state.user.id)

  if (targetUser === loggedInUser) {
    return next()
  } else {
    return ctx.unauthorized("You can not check others' given likes")
  }
}
