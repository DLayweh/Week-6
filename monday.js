
friut= ["apple", "banana", "cherry"]
friut.forEach((f) => console.log(f));

//no variable
[999, 444, 222].forEach (n => console.log(n));

["apple", "banana", "cherry"].forEach((f,i,a) => console.log(i,f,a));

//EXTRA CREDIT- SHOW DIFFERENT B/W CURRENT VALUE AND PERVIOUS VALUE
[11, 14, 16, 25].forEach((n,i,a) => i ? console.log(n-a[i-1]) : 0)

//f5 ot fn-f5 for run and debug