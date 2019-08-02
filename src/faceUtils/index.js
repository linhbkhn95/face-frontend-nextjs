import * as faceapi from 'face-api.js';
// import * as canvas from 'canvas';
// Load models and weights








const SSD_MOBILENETV1 = 'ssd_mobilenetv1'
const TINY_FACE_DETECTOR = 'tiny_face_detector'
const MTCNN = 'mtcnn'


let selectedFaceDetector = SSD_MOBILENETV1

// ssd_mobilenetv1 options
let minConfidence = 0.9

// tiny_face_detector options
let inputSize = 512
let scoreThreshold = 0.5

//mtcnn options
let minFaceSize = 20

class FaceApi {
    constructor() {
        this.faceapi =faceapi;
    }


    getFaceDetectorOptions() {
        return selectedFaceDetector === SSD_MOBILENETV1 ?
            new faceapi.SsdMobilenetv1Options({
                minConfidence
            }) :
            (
                selectedFaceDetector === TINY_FACE_DETECTOR ?
                new faceapi.TinyFaceDetectorOptions({
                    inputSize,
                    scoreThreshold
                }) :
                new faceapi.MtcnnOptions({
                    minFaceSize
                })
            )
    }
    loadModels() {
        const MODEL_URL ='static/models';

        Promise.all([
            this.faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL),
            this.faceapi.loadTinyFaceDetectorModel(MODEL_URL),
            this.faceapi.loadFaceLandmarkTinyModel(MODEL_URL),
            this.faceapi.loadFaceRecognitionModel(MODEL_URL),
        ]).then((rs) => {
            console.log("load model success!!!!!")

        })
    }

    async getFullFaceDescription(blob, inputSize = 512) {
        // tiny_face_detector options
        let scoreThreshold = 0.5;
        // const OPTION = new faceapi.TinyFaceDetectorOptions({
        //   inputSize,
        //   scoreThreshold
        // });
        const OPTION = new faceapi.SsdMobilenetv1Options({
            minConfidence: 0.9
        });
        const useTinyModel = true;

        // fetch image to api
        let img = await this.faceapi.fetchImage(blob);







        // detect all faces and generate full description from image
        // including landmark and descriptor of each face
        // Find only one face from image input
        // const result = await faceapi.detectSingleFace(img,getFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptor();
        // console.log("TCL: getFullFaceDescription -> result", result)
        // const result = await faceapi.detectSingleFace(img, OPTION).withFaceLandmarks().withFaceDescriptor()
        // console.log("TCL: getFullFaceDescription -> result", result)

        // See the descriptor in console.log
        // console.log(result.descriptor)
        let fullDesc = await this.faceapi
            .detectAllFaces(img, this.getFaceDetectorOptions())
            .withFaceLandmarks(true)
            .withFaceDescriptors();
        console.log("TCL: getFullFaceDescription -> fullDesc", fullDesc)

        return fullDesc;
    }
}
export default FaceApi;