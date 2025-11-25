const verifyInvestor = async (req, res, next) => {
  if (req.user?.role != "investor") {
    return res.status(403).json({message: "Denied"});
  }
  next();
};

export default verifyInvestor;