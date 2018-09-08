export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    
    },

    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'English',
      url: '/base',
      icon: 'icon-check',
      children: [
        {
          name: 'Keyword',
          url: '/keywords',
          icon: 'icon-note',
        },
       
    
      ],
    },


   
  ],
};
