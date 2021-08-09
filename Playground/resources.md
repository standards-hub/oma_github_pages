---
layout: common
description: Home page of the OMA DMSE GitHub pages
modules:
   -
        layout: oma_image-text
        title: Title 1
        subtitle: Subtitle 1
        image: ./path/image1.png
        button-label: "Learn more"
        button-style: "button" # display button sytle as a "button" (default)| or as a "link"
        button-url: https://github.com/standardshub/sh-web/edit/dev/index.markdown
        paragrah: Lorem Ipsum is simply dummy text of the printing andtypesetting industry
   - 
        layout: oma_dynamic_table_resources
        description: Table dedicated to display resources
        filter: 'visible' # 'hidden' = no visible; 'visible' = visible
        search: 'visible' #'hidden' = no visible; 'visible' = visible
        rows:
            -
                title: LwM2M v1.1 Presentation Overview
                title_url:
                resource_type: PDF
                resource_url: 
                date: 2020-Nov-10
                date_url:
                action: download
                action_url:
                action_icon: ./path/pdf.png
            -
                title: LwM2M v1.1 overview including new features due for release in Q2 2019
                title_url:
                resource_type: Video
                resource_url: 
                date: 2019-Jan-21
                date_url:
                action: download
                action_url:
                action_icon: ./path/video_icon.png
            -
                title: LwM2M v1.2 Features
                title_url:
                resource_type: PowerPoint
                resource_url: 
                date: 2021-Jan-24
                date_url:
                action: download
                action_url:
                action_icon: ./path/powerpoint.png
---
text that will be at the end of the above constructors
