import React from 'react'
import ConclusionImg from "../images/conclusion.jpg"
import '../info.css'

const Conclusion = () => {
  return (
    <div className='tab-container'>
      <img src={ConclusionImg} alt="" />
      <div className='content'>
        <p> In this paper, we proposed an effective recognition method with video to monitor and classify cow behavior using deep learning approaches. These technologies 
proved their potential in complex environments such as farms. They enabled conducting a monitoring method without appealing to these attached and invasive devices. Despite the surrounding inferences (e.g., sunlight and poor lighting) that produced undesirable effects on cow movements such as chewing or swallowing behaviors, we were able to accurately recognize these deep features of rumination behavior using all postures of the dairy cow
</p>
      </div>
     
    </div>
  )
}

export default Conclusion