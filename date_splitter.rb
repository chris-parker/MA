def date_splitter(start_date, end_date)
  booked_dates = []
  string_dates = []
  while start_date <= end_date
    booked_dates << start_date
    start_date += 1
  end
  booked_dates.each do |date|
    sdate = date.to_s
    string_dates << sdate[0..3] + "/" + sdate[4..5] + "/" + sdate[6..7]
  end
  string_dates
end
