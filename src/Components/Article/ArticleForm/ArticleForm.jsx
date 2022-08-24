import React from 'react'
import style from './ArticleForm.module.css'

const Article = () => {
  return (
    <article className={style.Article}>
                <h2>Ajude o algorítimo a ser mais certeiro</h2>
                <p className={style.Paragraf}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta <br/>
                    convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper <br/>
                    pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat <br/>
                    ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti <br/>
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna <br/>
                    tortor. Vivamus et arcu non felis tristique eleifend.<br/>
                    <br/>
                    Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. <br/>
                    Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula <br/>
                    pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat <br/>
                    vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante <br/>
                    suscipit libero, at   mattis augue est vel metus.
                </p>
            </article>
  )
}

export default Article