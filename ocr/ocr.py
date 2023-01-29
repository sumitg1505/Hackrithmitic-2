import cv2
import pytesseract
pytesseract.pytesseract.tesseract_cmd=r'C:Program FilesTesseract-OCRtesseract.exe'
corpus = []
for images in myRevList:
    img = cv2.imread(f'{test}/{images}')
    if img is None:
        corpus.append("Could not read the image.")
    else:
        rev = pytesseract.image_to_string(img)
        corpus.append(rev)
list(corpus)
corpus
