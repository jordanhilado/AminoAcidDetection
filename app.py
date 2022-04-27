from flask import Flask, render_template, request
import sqlite3 as sql
from Bio.Seq import Seq

app = Flask(__name__)

conn = sql.connect("database.db")
# conn.execute('CREATE TABLE results (oldsequence TEXT, newsequence TEXT)')

app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    else:
        sequence = request.form.get("sequence")
        translatedSeq = "AUGT"
        with sql.connect("database.db") as con:
            cur = con.cursor()
            cur.execute("INSERT INTO results (oldsequence, newsequence) VALUES (?, ?)", (sequence, translatedSeq))
            con.commit()
        con.row_factory = sql.Row
        cur.execute("select * from results")
        rows = cur.fetchall();
        print(rows)
        return render_template("index.html", rows=rows)

@app.route("/dna")
def dna():
    return render_template("dna.html")

@app.route("/rna")
def rna():
    return render_template("rna.html")