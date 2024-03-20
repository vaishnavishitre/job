export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    
    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true, // Set httpOnly to true
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };
// export const sendToken = (user, statusCode, res, message) => {
//   const token = user.getJWTToken();
//   const cookieExpire = process.env.COOKIE_EXPIRE;

//   // Ensure that COOKIE_EXPIRE is defined and is a number
//   if (!cookieExpire || isNaN(cookieExpire)) {
//     return res.status(500).json({ success: false, message: 'Invalid cookie expiration configuration.' });
//   }

//   const options = {
//     expiresIn: cookieExpire * 24 * 60 * 60, // Convert days to seconds
//     httpOnly: true, // Set httpOnly to true
//   };

//   res.status(statusCode).cookie("token", token, options).json({
//     success: true,
//     user,
//     message,
//     token,
//   });
// };
