import re, os, glob, json


os.chdir("./project1")
transcripts = []
for file in glob.glob("*.txt"):
    f = open(file, "r")

    speech = []
    acc = []
    accLength = 0
    accWord = 0
    for i in f:
        w = i.split()
        label = re.match( r'^[A-Z\s,.\(\)-\`\"\&\#]+[\(A-z\s\)]*:', i)
        #label = [word for word  in w if word.isupper()
        if label and w[0].isupper() and len(w[0]) > 2:
            if len(acc) > 0:
                acc[1] = acc[1].replace("\n", " ").replace(",","").replace(".","")
                accLength += len(acc[1])
                accWord += len(max(acc[1].split(), key=len))
                speech.append([acc[0], [len(acc[1]) , accLength, max(acc[1].split(), key=len), len(max(acc[1].split(), key=len)), accWord]])
            acc = [label.group(0),  i[label.end():]] #i[label.end():]]
        elif(len(acc) > 0):   
            acc[1] += i
    if len(acc) > 0:
            acc[1] = acc[1].replace("\n", " ").replace(",","").replace(".","")
            accLength += len(acc[1])
            accWord += len(max(acc[1].split(), key=len))
            speech.append([acc[0], [len(acc[1]) , accLength, max(acc[1].split(), key=len), len(max(acc[1].split(), key=len)), accWord]])
    transcripts.append([file,speech])
    print(speech)
print(transcripts)
outFile = open("transcripts.json","w")
json.dump(transcripts,outFile)

