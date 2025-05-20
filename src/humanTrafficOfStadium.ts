// 601. Human Traffic of Stadium

type StadiumRow = {
    id:number;
    visit_date:string;
    people:number;
};
 
// Example data
const stadium: StadiumRow[] = [
{ id:1,visit_date:"2018-01-01",people:10},
{ id:2,visit_date:"2018-01-02",people:109},
{ id:3,visit_date:"2018-01-03",people:150},
{ id:4,visit_date:"2018-01-04",people:99},
{ id:5,visit_date:"2018-01-05",people:145},
{ id:6,visit_date:"2018-01-06",people:1455},
{ id:7,visit_date:"2018-01-09",people:199},
{ id:8,visit_date:"2018-01-10",people:188},
];

// Filtering rows with people >=100
const filtered: StadiumRow[]=stadium.filter((row) =>row.people>=100);

// Finding sequences of 3 or more consecutive ids
let result: StadiumRow[]=[];
let tempSeq: StadiumRow[]=[];

for (let i = 0; i < filtered.length; i++) {
    if (i===0|| filtered[i].id===filtered[i-1].id+1) {
        tempSeq.push(filtered[i]);
    } else {
        if(tempSeq.length>=3) {
            result=result.concat(tempSeq);
        }
        tempSeq=[filtered[i]];
    }
    
}

// Final checking for the last sequence
if(tempSeq.length>=3) {
    result=result.concat(tempSeq);
}

// Sorting by visit_date
result.sort((a,b)=>new Date(a.visit_date).getTime()-new Date(b.visit_date).getTime());

console.table(result);