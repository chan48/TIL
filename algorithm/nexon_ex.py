# 아래 solve 함수를 작성하세요.
# 확실히 찍먹파인 사람들의 이름을 배열에 모아 리턴하세요.

# N: 이름의 수
# M: 친구관계의 수
# names: 이름이 저장된 배열
# relations: 친구 관계가 길이 2인 배열로 저장된 배열

def solve(N, M, names, relations):
    # 여기에 코드를 작성하세요.

    jjik = ["dizni", "dao"]
    boo = []
    for x in jjik:
        for (first, last) in relations:
            if first == x:
                jjik.append(last)
            elif last == x:
                jjik.append(first)
            # print (first, last)
    return []

N = int(input())                                # stub
names = [input() for y in range(N)]             # stub
M = int(input())                                # stub
relations = [input().split() for y in range(M)] # stub

ret = solve(N, M, names, relations)                  # stub
print(len(ret)) # stub
print('\n'.join(ret)) # stub




# 답 (1)
N = int(input())                                # stub
names = [input() for y in range(N)]             # stub
M = int(input())                                # stub
relations = [input().split() for y in range(M)] # stub

def solve(N, M, names, relations):

    jjik = ["dizni"]
    # cnt = 0
    for x in jjik:
        # cnt += 1
        # print ("jjik's count"+str(cnt)+" "+jjik[cnt-1])
        for (first, last) in relations:
            if first == x and last not in jjik:
                jjik.append(last)
                # print("last : "+last)
            elif last == x and first not in jjik:
                jjik.append(first)
                # print("first : "+first)
    return jjik


solve(N, M, names, relations)
