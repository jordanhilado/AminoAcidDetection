from django.shortcuts import render
from flask import Flask, render_template, request
import sqlite3 as sql
from Bio.Seq import Seq

app = Flask(__name__)

conn = sql.connect("database.db")
# conn.execute('CREATE TABLE results (oldsequence TEXT, newsequence TEXT)')

app.config["TEMPLATES_AUTO_RELOAD"] = True

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == 'POST':
        if request.form == "Reset":
            return render_template("dna.html")
        try:
            sequence = request.form.get("sequence")
            translatedSeq = "AUGT"
            with sql.connect("database.db") as con:
                cur = con.cursor()
                cur.execute("INSERT INTO results (oldsequence, newsequence) VALUES (?,?)",(sequence, translatedSeq))
                con.commit()
        except:
            con.rollback()
        finally:
            con = sql.connect("database.db")
            con.row_factory = sql.Row
            cur = con.cursor()
            cur.execute("select * from results")
            rows = cur.fetchall();
            return render_template("index.html", rows = rows)
    else:
        return render_template("index.html")

@app.route("/dna")
def dna():
    return render_template("dna.html")

@app.route("/rna")
def rna():
    return render_template("rna.html")