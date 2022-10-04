export default {
    name:'websites',
    title:'Websites',
    type: 'document',
    fields:[
        { 
            name:'title',
            title:'Title',
            type: 'string'
        },
        {
            name:'date',
            title:'Date',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'desc',
            title:'Description',
            type:'string'
        },
        {
            name:'link',
            title:'Link',
            type:'string'
        }
    ]
}