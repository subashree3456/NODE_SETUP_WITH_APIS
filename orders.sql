--Orders

[
{ _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
{ _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
{ _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
{ _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
{ _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
{ _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
]


--Stage 1 -- Filter urgent orders

[
{ _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
{ _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
{ _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
{ _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
]


--Stage 2 -- Group  & Sum

select productName as _id, sum(quantity) as totalUrgentQuantity from Orders 
where Status="urgent"
group by productName 


-- Output

[
    {_id:"Steel beam", totalUrgentQuantity: 50},
     {_id:"Iron rod", totalUrgentQuantity: 60}
]