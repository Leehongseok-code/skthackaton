import webcolors
import matplotlib.pyplot as plt

def closet_color(rgb):
    diffrences = {}
    for color_hex, color_name in webcolors.CSS3_HEX_TO_NAMES.items():
        r, g, b = webcolors.hex_to_rgb(color_hex)
        diffrences[sum([(r-rgb[0])**2, (g-rgb[1])**2, (b-rgb[2])**2])] = color_name
    return diffrences[min(diffrences.keys())]

color = (113, 241, 224)

print(webcolors.rgb_to_name(color))