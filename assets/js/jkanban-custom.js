var kanban1 = new jKanban({
  element: '.kanab-1',
  boards: [
    {
      id: '_todo',
      title: 'Todo Taks',
      gutter: '15px',
      widthBoard: '250px',
      responsive: '700',
      item: [ 
        {
          title: `
            <div class="kanban-box w-full">  
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white rounded-5 flex flex-col gap-5 2xl:gap-3"> 
                        <div class="flex gap-1 items-center"> 
                           <div class="badge border border-primary text-primary rounded">Design</div>
                           <i data-feather="plus"></i>
                               <svg class="w-6 h-6 stroke-primary">
                                    <use href="../../assets/svg/_sprite.svg#Plus"></use>
                              </svg> 
                        </div>
                        <div class="flex items-center gap-2"> 
                        <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark font-medium"> Design landing page for support team Don't because is make dome bigger </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <span class=text-content ">15 Apr 2020</span> 
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> 
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/1.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div> 
             </div>
               `,
        },
        {
          title: ` 
          <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-warning"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Don't use unwanted extra div because is make dome bigger</h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge border border-warning text-warning rounded">code</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4"> 
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6"> 
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/4.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/5.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>
                            `,
        },
        {
          title: ` 
          <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-danger"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Not Proper Responsive ro Some Screen</h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between">  
                           <div class="flex items-center gap-4"> 
                           <div class="badge border border-danger text-danger rounded">Issues</div><span class=text-content">48%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">34</span></div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div>
                     </div>
                  </div> 
             </div>
                            `,
        },
      ],
    },
    {
      id: '_doing',
      title: 'In Progress',
      item: [
        {
          title: `
               <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class=" flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-info"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Testing dark and rtl  </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-info badge-outline rounded-5">info</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">35</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/4.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>                  

                            `,
        },
        {
          title: `
                 <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-info"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Working on demo 3 design </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-info badge-outline rounded-5">info</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/1.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>                      

                            `,
        },
      ],
    },
    {
      id: '_done',
      title: 'Done',
      item: [
        {
          title: `
                <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-warning"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">working demo 2  </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-warning badge-outline rounded-5">warning</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>                                          
          

                            `,
        },
        {
          title: `
           <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-success"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Make Responsive demo 2  </h5>
                        </div> 
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-success badge-outline rounded-5">success</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>  
                            `,
        },
        {
          title: `
           <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 shadow-md bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-success"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Working On Dark and Rtl of demo 2  </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-success badge-outline rounded-5">success</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar"> 
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>  
                            `,
        },
      ],
    },
  ],
});

var kanban2 = new jKanban({
  element: '.kanab-2',
  gutter: '15px',
  click: function (el) {
    alert(el.innerHTML);
  },
  boards: [
    {
      id: '_todo',
      title: 'To Do (Item only in Working)',
      class: 'bg-info',
      dragTo: ['_working'],
      item: [
        {
          title: `
            <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-primary"></div>
                        <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Final Test For The Design Issues </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-success badge-outline rounded-5">design</div><span class=text-content">48%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">7   </span></div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/6.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div> 
             </div>
               `,
        },
        {
          title: ` 
          <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-warning"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Don't use unwanted extra div because is make dome bigger</h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-warning badge-outline rounded-5">code</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div> 
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>
                            `,
        },
        {
          title: ` 
          <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-danger"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Not Proper Responsive ro Some Screen</h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between">  
                           <div class="flex items-center gap-4"> 
                           <div class="badge badge-error badge-outline rounded-5">Issues</div><span class=text-content">48%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">34</span></div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div>
                     </div>
                  </div> 
             </div>
                            `,
        },
      ],
    },
    {
      id: '_working',
      title: 'Working',
      class: 'bg-warning',
      item: [
        {
          title: `
               <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-info"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Testing dark and rtl  </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-info badge-outline rounded-5">info</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">35</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/6.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>                  

                            `,
        },
        {
          title: `
                 <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-info"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Working on demo 3 design </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-info badge-outline rounded-5">info</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/6.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/8.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>                      

                            `,
        },
      ],
    },
    {
      id: '_done',
      title: 'Done (Item only in Working)',
      class: 'bg-success',
      dragTo: ['_working'],
      item: [
        {
          title: `
                <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-warning"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">working demo 2  </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-warning badge-outline rounded-5">warning</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/10.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/21.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/31.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>                                          
          

                            `,
        },
        {
          title: `
           <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-success"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Make Responsive demo 2  </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-success badge-outline rounded-5">success</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>  
                            `,
        },
        {
          title: `
           <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        <div class="min-w-3 w-3 min-h-3 h-3 rounded-full bg-success"></div>
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Working On Dark and Rtl of demo 2  </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-success badge-outline rounded-5">success</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/5.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/7.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>  
                            `,
        },
      ],
    },
  ],
});

var kanban3 = new jKanban({
  element: '.kanab-3',
  gutter: '15px',
  click: function (el) {
    alert(el.innerHTML);
  },
  boards: [
    {
      id: '_todo',
      title: 'To Do',
      class: 'info',
      item: [
        {
          title: `
            <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border-l-4 border-l-success border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        
                        <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Final Test For The Design Issues </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-success badge-outline rounded-5">design</div><span class=text-content">48%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">7   </span></div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div>
                     </div>
                     </div> 
             </div>
               `,
        },
        {
          title: ` 
          <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border-l-4 border-l-warning  border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Don't use unwanted extra div because is make dome bigger</h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-warning badge-outline rounded-5">code</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/6.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/4.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>
                            `,
        },
        {
          title: ` 
          <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border-l-4 border-l-danger  border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Not Proper Responsive ro Some Screen</h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between">  
                           <div class="flex items-center gap-4"> 
                           <div class="badge badge-error badge-outline rounded-5">Issues</div><span class=text-content">48%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">34</span></div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div>
                     </div>
                  </div> 
             </div>
                            `,
        },
      ],
    },
    {
      id: '_working',
      title: 'Working',
      class: 'warning',
      item: [
        {
          title: `
               <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border-l-4 border-l-info border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center gap-2">
                       
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Testing dark and rtl  </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-info badge-outline rounded-5">info</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">35</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/5.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/3.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>                  

                            `,
        },
        {
          title: `
                 <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border-l-4 border-l-info border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                      
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Working on demo 3 design </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-info badge-outline rounded-5">info</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/5.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/12.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/31.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>                      

                            `,
        },
      ],
    },
    {
      id: '_done',
      title: 'Done',
      class: 'success',
      item: [
        {
          title: `
                <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border-l-4 border-l-warning border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">working demo 2  </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-warning badge-outline rounded-5">warning</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/15.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/16.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/17.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>                                          
          

                            `,
        },
        {
          title: `
           <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border-l-4 border-l-success border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Make Responsive demo 2  </h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-success badge-outline rounded-5">success</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/5.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/16.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/20.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>  
                            `,
        },
        {
          title: `
           <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4 border-l-4 border-l-success border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                        
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Working On Dark and Rtl of demo 2  </h5>
                        </div> 
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-success badge-outline rounded-5">success</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/22.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/23.jpg" alt="avatar"></div>
                           </div>
                           
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/24.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>  
                            `,
        },
      ],
    },
  ],
});

var toDoButton = document.getElementById('addToDo');
toDoButton.addEventListener('click', function () {
  kanban3.addElement('_todo', {
    title: `
    
     <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4  border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Don't use unwanted extra div because is make dome bigger</h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-warning badge-outline rounded-5">code</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/13.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/14.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/15.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/16.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>
                            `,
  });
});

var addBoardDefault = document.getElementById('addDefault');
addBoardDefault.addEventListener('click', function () {
  kanban3.addBoards([
    {
      id: '_default',
      title: 'Kanban Default',
      item: [
        {
          title: ` 
           <div class="kanban-box"> 
                  <div class="kanab-item-1 p-5 2xl:p-4  border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Don't use unwanted extra div because is make dome bigger</h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-warning badge-outline rounded-5">code</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/users/avatar/23.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/users/avatar/24.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/users/avatar/23.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/users/avatar/26.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>


                            `,
        },

        {
          title: `
                       
          
           <div class="kanban-box">
                  <div class="kanab-item-1 p-5 2xl:p-4  border border-light bg-white rounded-5 flex flex-col gap-5 2xl:gap-3">
                        <div class="flex items-center gap-2">
                           <h5 class="w-[calc(100%_-_12px)] 2xl:text-xs text-sm text-dark">Don't use unwanted extra div because is make dome bigger</h5>
                        </div>
                        <div class="2xl:flex-col 2xl:items-start 2xl:gap-2 flex items-center justify-between"> 
                           <div class="flex items-center gap-4">
                           <div class="badge badge-warning badge-outline rounded-5">code</div><span class=text-content">88%</span>
                           </div>
                           <div class="flex items-center justify-between gap-4">
                           <div class="flex items-center gap-1"> <i class="w-5 h-5 stroke-primary" data-feather="message-circle"></i><span class=text-content">15</span></div>
                         <div class="avatar-group -space-x-6">
                         
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           <div class="avatar">
                              <div class="rounded-full w-7 h-7"><img src="../../assets/images/avatar/2.jpg" alt="avatar"></div>
                           </div>
                           </div>
                        </div> 
                        </div>
                     </div>
                  </div> 
             </div>

                            `,
        },
      ],
    },
  ]);
});

feather.replace();
var removeBoard = document.getElementById('removeBoard');
removeBoard.addEventListener('click', function () {
  kanban3.removeBoard('_done');
});
