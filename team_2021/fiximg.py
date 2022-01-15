import cv2
from autocrop import cropper

autocropper = cropper.AutoCropper(
    model="mobilenetv2",  # 'mobilenetv2' or 'shufflenetv2'
    cuda=True,  # if GUDA is avaliable and True, Inference on GPU
    use_face_detector=True,
)  # Use Face Detector to filter RoIs
# BGR to RGB
img = cv2.imread("imgs/demo.jpg")
img_ = img[:, :, (2, 1, 0)]
# get crop result
crop_ret = autocropper.crop(
    img_,
    topK=1,
    crop_height=1,
    crop_width=1,
    filter_face=True,  # True: Crop result will not contain half face
    single_face_center=True,
)  # True: face in the crop result's width center
