Execution Context practice!!!

Summaries:
It is including 2 phases:
1. Creation phase:
   - Finding all var, function and inside {} add them into LE
   - If const and let then add them into TDZ
   - Check all arguments variable and put it into LE
   - Check the outer depedency
3. Execution phase:
   - Move any variable from TDZ into LE
   - Execute code by scan from top to bottom and so on
