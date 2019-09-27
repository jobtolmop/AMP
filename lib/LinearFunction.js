class LinearFunction
{
  constructor(slope, intercept)
  {
    this.slope = slope
    this.intercept = intercept
  }


  calcY(x)
  {
    return this.slope * x + this.intercept;
  }
}
