from tkinter import *
from translate import Translator

def translate():
    translator = Translator(from_lang=lan1.get(), to_lang=lan2.get())
    translation = translator.translate(var.get())
    var1.set(translation)

root = Tk()
root.title("Translator")

# Main frame setup
mainframe = Frame(root)
mainframe.grid(column=0, row=0, sticky=(N, W, E, S))
mainframe.columnconfigure(0, weight=1)
mainframe.rowconfigure(0, weight=1)
mainframe.pack(pady=100, padx=100)

# Language selection
lan1 = StringVar(root)
lan2 = StringVar(root)
choices = {'English', 'Kazakh', 'Russian', 'Spanish', 'German'}

# Default selections for dropdown lists
lan1.set('English')
lan2.set('Kazakh')

# Language 1 selection
Label(mainframe, text="From language").grid(row=0, column=1)
lan1menu = OptionMenu(mainframe, lan1, *choices)
lan1menu.grid(row=1, column=1)

# Language 2 selection
Label(mainframe, text="To language").grid(row=0, column=2)
lan2menu = OptionMenu(mainframe, lan2, *choices)
lan2menu.grid(row=1, column=2)

# Input text
Label(mainframe, text="Enter text").grid(row=2, column=0)
var = StringVar()
Entry(mainframe, textvariable=var).grid(row=2, column=1)

# Output text
Label(mainframe, text="Output").grid(row=2, column=2)
var1 = StringVar()
Entry(mainframe, textvariable=var1).grid(row=2, column=3)

# Translate button
Button(mainframe, text='Translate', command=translate).grid(row=3, column=1, columnspan=3)

root.mainloop()
