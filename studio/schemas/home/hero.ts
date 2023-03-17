export default {
    title: 'Hero',
    name: 'home.hero',
    type: "object",
    fields :[
        {
            title : 'Highlight',
            name : 'highlight',
            type : 'string'
        },
        {
            title: 'Title',
            name: 'title',
            type : 'string'
        },
        {
            title : 'Description',
            name : 'description',
            type : "string",
        },
        {
            title : 'Banner Image',
            name : 'bannerImage',
            type : 'image'
        },
        {
            title : "Primary CTA",
            type : "link",
            name :'primaryCta'
        },
        {
            title : "Secondary CTA",
            type : "link",
            name :'secondaryCta'
        }
    ]
}