import React from 'react'
import keypoint from "../images/keypoint.png"
import '../info.css'


const WorkDone = () => {
  return (
    <div className='workdone tab-container'>
      <img src={keypoint} alt="keypoint diagram" />
      <div className='content'>
          <p>Keypoint detection consists of locating key object parts. For example, the key parts of our faces include nose tips, eyebrows, eye corners, and so on. These parts help to represent the underlying object in a feature-rich manner. Keypoint detection has applications that include pose estimation, face detection, etc. 
              Torchvision has a pretrained Keypoint Detection model, in its detection module. The model is built on top of the ResNet-50 FPN (Feature Pyramid Network) backbone. Feature Pyramid Network is the concept of fusing feature maps at multiple scales to preserve information at multiple levels. This backbone architecture was also used in RetinaNet (which introduced Focal-Loss). Keypoint RCNN slightly modifies the existing Mask RCNN, by one-hot encoding a keypoint (instead of the whole mask) of the detected object. By default this model can detect 17 key points for humans. This model is trained on our custom dataset for cattle.  
          </p>
      </div>
    </div>
  )
}

export default WorkDone