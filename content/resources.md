---
layout: resources
description: Home page of the OMA DMSE GitHub pages
modules:
   -
        layout: image-text
        title: Title 1
        subtitle: Subtitle 1
        image: ./path/image1.png
        paragrah: Lorem Ipsum is simply dummy text of the printing andtypesetting industry
   - 
        layout: dynamic-table-resources
        description: Table dedicated to display resources
        filter: 'visible' # 'hidden' = no visible; 'visible' = visible
        items: 
            -
                 title: title
                 index: 1
            - 
                 title: date
                 index: 3
        search: 'visible' #'hidden' = no visible; 'visible' = visible
        table:
            -
                row:
                    -
                        title: LwM2M v1.1 Presentation Overview
                        url: ""
                    -
                        title: PDF
                        url: ""
                    -
                        title: 2020-Nov-10
                        url: ""
                    -
                        icon:  ./path/pdf-icon.png
                        url: www.
           -
                row:
                    -
                        title: LwM2M v1.1 overview including new features due for release in Q2 2019
                        url: www.
                    -
                        title: Video
                        url: ""
                    -
                        title: 2019-Jan-21
                        url: ""
                    -
                        icon: ./path/video_icon.png
                        url: www.
                        
            -
                row:
                    -
                        title: LwM2M v1.2 Features
                        url:
                    -
                        title: PowerPoint
                        url: 
                    -
                        title: 2021-Jan-24
                        url:
                    -   
                        url:
                        icon: ./path/powerpoint.png
---
text that will be at the end of the above constructors
