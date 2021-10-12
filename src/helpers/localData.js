const localData = {
    "title": "Monopoly Inc",
    "properties": [
        { 
            "id": "1",
            "name": "Blue Properties",
            "subproperties": [ 
                {   parentId: "1",
                    id: "S1",
                    name: "Park Place"
                },
                {   parentId: "1",
                    id: "S2",
                    name: "Boardwalk"
                }
            ]
        },
        { 
            "id": "2",
            "name": "Brown Properties",
            "subproperties": [ 
                {   parentId: "2",
                    id: "S3",  
                    name: "Mediterranean Avenue",
                },
                {   parentId: "2",
                    id: "S4", 
                    name: "Baltic Avenue"
                }
            ]
        }
      ]
}

export default localData